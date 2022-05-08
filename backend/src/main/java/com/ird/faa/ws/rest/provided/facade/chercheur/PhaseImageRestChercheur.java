package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.PhaseImageChercheurService;

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
import com.ird.faa.bean.PhaseImage;
import com.ird.faa.ws.rest.provided.converter.PhaseImageConverter;
import com.ird.faa.ws.rest.provided.vo.PhaseImageVo;

@Api("Manages phaseImage services")
@RestController
@RequestMapping("api/chercheur/phaseImage")
public class PhaseImageRestChercheur {

@Autowired
private PhaseImageChercheurService phaseImageService;

@Autowired
private PhaseImageConverter phaseImageConverter;


            @ApiOperation("Updates the specified  phaseImage")
            @PutMapping("/")
            public  PhaseImageVo update(@RequestBody  PhaseImageVo  phaseImageVo){
            PhaseImage phaseImage = phaseImageConverter.toItem(phaseImageVo);
            phaseImage = phaseImageService.update(phaseImage);
            return phaseImageConverter.toVo(phaseImage);
            }

    @ApiOperation("Finds a list of all phaseImages")
    @GetMapping("/")
    public List<PhaseImageVo> findAll(){
        return phaseImageConverter.toVo(phaseImageService.findAll());
    }

    @ApiOperation("Finds a phaseImage with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public PhaseImageVo findByIdWithAssociatedList(@PathVariable Long id){
    return phaseImageConverter.toVo(phaseImageService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search phaseImage by a specific criteria")
    @PostMapping("/search")
    public List<PhaseImageVo> findByCriteria(@RequestBody PhaseImageVo phaseImageVo){
        return phaseImageConverter.toVo(phaseImageService.findByCriteria(phaseImageVo));
        }

            @ApiOperation("Finds a phaseImage by id")
            @GetMapping("/id/{id}")
            public PhaseImageVo findById(@PathVariable Long id){
            return phaseImageConverter.toVo(phaseImageService.findById(id));
            }

            @ApiOperation("Saves the specified  phaseImage")
            @PostMapping("/")
            public PhaseImageVo save(@RequestBody PhaseImageVo phaseImageVo){
            PhaseImage phaseImage = phaseImageConverter.toItem(phaseImageVo);
            phaseImage = phaseImageService.save(phaseImage);
            return phaseImageConverter.toVo(phaseImage);
            }

            @ApiOperation("Delete the specified phaseImage")
            @DeleteMapping("/")
            public int delete(@RequestBody PhaseImageVo phaseImageVo){
            PhaseImage phaseImage = phaseImageConverter.toItem(phaseImageVo);
            return phaseImageService.delete(phaseImage);
            }

            @ApiOperation("Deletes a phaseImage by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return phaseImageService.deleteById(id);
            }


            }
