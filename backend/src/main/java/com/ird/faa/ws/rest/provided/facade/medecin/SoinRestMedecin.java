package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.SoinMedecinService;

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
import com.ird.faa.bean.Soin;
import com.ird.faa.ws.rest.provided.converter.SoinConverter;
import com.ird.faa.ws.rest.provided.vo.SoinVo;

@Api("Manages soin services")
@RestController
@RequestMapping("api/medecin/soin")
public class SoinRestMedecin {

@Autowired
private SoinMedecinService soinService;

@Autowired
private SoinConverter soinConverter;


            @ApiOperation("Updates the specified  soin")
            @PutMapping("/")
            public  SoinVo update(@RequestBody  SoinVo  soinVo){
            Soin soin = soinConverter.toItem(soinVo);
            soin = soinService.update(soin);
            return soinConverter.toVo(soin);
            }

    @ApiOperation("Finds a list of all soins")
    @GetMapping("/")
    public List<SoinVo> findAll(){
        return soinConverter.toVo(soinService.findAll());
    }

    @ApiOperation("Finds a soin with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public SoinVo findByIdWithAssociatedList(@PathVariable Long id){
    return soinConverter.toVo(soinService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search soin by a specific criteria")
    @PostMapping("/search")
    public List<SoinVo> findByCriteria(@RequestBody SoinVo soinVo){
        return soinConverter.toVo(soinService.findByCriteria(soinVo));
        }

            @ApiOperation("Finds a soin by id")
            @GetMapping("/id/{id}")
            public SoinVo findById(@PathVariable Long id){
            return soinConverter.toVo(soinService.findById(id));
            }

            @ApiOperation("Saves the specified  soin")
            @PostMapping("/")
            public SoinVo save(@RequestBody SoinVo soinVo){
            Soin soin = soinConverter.toItem(soinVo);
            soin = soinService.save(soin);
            return soinConverter.toVo(soin);
            }

            @ApiOperation("Delete the specified soin")
            @DeleteMapping("/")
            public int delete(@RequestBody SoinVo soinVo){
            Soin soin = soinConverter.toItem(soinVo);
            return soinService.delete(soin);
            }

            @ApiOperation("Deletes a soin by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return soinService.deleteById(id);
            }
        @ApiOperation("find by infirmier ref")
        @GetMapping("/infirmier/ref/{ref}")
        public List<Soin> findByInfirmierRef(@PathVariable String ref){
        return soinService.findByInfirmierRef(ref);
        }

        @ApiOperation("delete by infirmier ref")
        @DeleteMapping("/infirmier/ref/{ref}")
        public int deleteByInfirmierRef(@PathVariable String ref){
        return soinService.deleteByInfirmierRef(ref);
        }

        @ApiOperation("find by infirmier id")
        @GetMapping("/infirmier/id/{id}")
        public List<Soin> findByInfirmierId(@PathVariable Long id){
        return soinService.findByInfirmierId(id);
        }

        @ApiOperation("delete by infirmier id")
        @DeleteMapping("/infirmier/id/{id}")
        public int deleteByInfirmierId(@PathVariable Long id){
        return soinService.deleteByInfirmierId(id);
        }

        @ApiOperation("find by traitement id")
        @GetMapping("/traitement/id/{id}")
        public List<Soin> findByTraitementId(@PathVariable Long id){
        return soinService.findByTraitementId(id);
        }

        @ApiOperation("delete by traitement id")
        @DeleteMapping("/traitement/id/{id}")
        public int deleteByTraitementId(@PathVariable Long id){
        return soinService.deleteByTraitementId(id);
        }



            }
