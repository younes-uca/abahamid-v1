package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.SexeMedecinService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.Sexe;
import com.ird.faa.ws.rest.provided.converter.SexeConverter;
import com.ird.faa.ws.rest.provided.vo.SexeVo;

@Api("Manages sexe services")
@RestController
@RequestMapping("api/medecin/sexe")
public class SexeRestMedecin {

@Autowired
private SexeMedecinService sexeService;

@Autowired
private SexeConverter sexeConverter;


            @ApiOperation("Updates the specified  sexe")
            @PutMapping("/")
            public  SexeVo update(@RequestBody  SexeVo  sexeVo){
            Sexe sexe = sexeConverter.toItem(sexeVo);
            sexe = sexeService.update(sexe);
            return sexeConverter.toVo(sexe);
            }

    @ApiOperation("Finds a list of all sexes")
    @GetMapping("/")
    public List<SexeVo> findAll(){
        return sexeConverter.toVo(sexeService.findAll());
    }

    @ApiOperation("Finds a sexe with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public SexeVo findByIdWithAssociatedList(@PathVariable Long id){
    return sexeConverter.toVo(sexeService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search sexe by a specific criteria")
    @PostMapping("/search")
    public List<SexeVo> findByCriteria(@RequestBody SexeVo sexeVo){
        return sexeConverter.toVo(sexeService.findByCriteria(sexeVo));
        }

            @ApiOperation("Finds a sexe by id")
            @GetMapping("/id/{id}")
            public SexeVo findById(@PathVariable Long id){
            return sexeConverter.toVo(sexeService.findById(id));
            }

            @ApiOperation("Saves the specified  sexe")
            @PostMapping("/")
            public SexeVo save(@RequestBody SexeVo sexeVo){
            Sexe sexe = sexeConverter.toItem(sexeVo);
            sexe = sexeService.save(sexe);
            return sexeConverter.toVo(sexe);
            }

            @ApiOperation("Delete the specified sexe")
            @DeleteMapping("/")
            public int delete(@RequestBody SexeVo sexeVo){
            Sexe sexe = sexeConverter.toItem(sexeVo);
            return sexeService.delete(sexe);
            }

            @ApiOperation("Deletes a sexe by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return sexeService.deleteById(id);
            }


            }
