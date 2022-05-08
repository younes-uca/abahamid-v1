package  com.ird.faa.ws.rest.provided.facade.etudiant;

import com.ird.faa.service.etudiant.facade.ExamenEtudiantService;

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
import com.ird.faa.bean.Examen;
import com.ird.faa.ws.rest.provided.converter.ExamenConverter;
import com.ird.faa.ws.rest.provided.vo.ExamenVo;

@Api("Manages examen services")
@RestController
@RequestMapping("api/etudiant/examen")
public class ExamenRestEtudiant {

@Autowired
private ExamenEtudiantService examenService;

@Autowired
private ExamenConverter examenConverter;


            @ApiOperation("Updates the specified  examen")
            @PutMapping("/")
            public  ExamenVo update(@RequestBody  ExamenVo  examenVo){
            Examen examen = examenConverter.toItem(examenVo);
            examen = examenService.update(examen);
            return examenConverter.toVo(examen);
            }

    @ApiOperation("Finds a list of all examens")
    @GetMapping("/")
    public List<ExamenVo> findAll(){
        return examenConverter.toVo(examenService.findAll());
    }

    @ApiOperation("Finds a examen with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public ExamenVo findByIdWithAssociatedList(@PathVariable Long id){
    return examenConverter.toVo(examenService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search examen by a specific criteria")
    @PostMapping("/search")
    public List<ExamenVo> findByCriteria(@RequestBody ExamenVo examenVo){
        return examenConverter.toVo(examenService.findByCriteria(examenVo));
        }

            @ApiOperation("Finds a examen by id")
            @GetMapping("/id/{id}")
            public ExamenVo findById(@PathVariable Long id){
            return examenConverter.toVo(examenService.findById(id));
            }

            @ApiOperation("Saves the specified  examen")
            @PostMapping("/")
            public ExamenVo save(@RequestBody ExamenVo examenVo){
            Examen examen = examenConverter.toItem(examenVo);
            examen = examenService.save(examen);
            return examenConverter.toVo(examen);
            }

            @ApiOperation("Delete the specified examen")
            @DeleteMapping("/")
            public int delete(@RequestBody ExamenVo examenVo){
            Examen examen = examenConverter.toItem(examenVo);
            return examenService.delete(examen);
            }

            @ApiOperation("Deletes a examen by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return examenService.deleteById(id);
            }


            }
